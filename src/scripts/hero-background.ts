/**
 * Shared behaviour for an animated canvas background: sizing, theme colours,
 * pausing when out of view, and a still frame for reduced motion.
 * The drawing itself lives in a Scene (hero-rain.ts).
 */

export interface Palette {
  accent: string;
  ink: string;
  /** Ecosystem colours, in the order of the Technologies buttons. */
  eco: string[];
}

export interface Scene {
  resize(width: number, height: number): void;
  step(seconds: number): void;
  draw(ctx: CanvasRenderingContext2D, palette: Palette): void;
}

const ECOSYSTEMS = ['uipath', 'microsoft', 'sap', 'code', 'ai'];

export function mountBackground(canvas: HTMLCanvasElement, scene: Scene): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const still = () => reducedMotion.matches;

  const readPalette = (): Palette => {
    const css = getComputedStyle(root);
    const value = (name: string) => css.getPropertyValue(name).trim();
    return {
      accent: value('--accent'),
      ink: value('--ink'),
      eco: ECOSYSTEMS.map((id) => value(`--eco-${id}`)),
    };
  };

  let palette = readPalette();
  let width = 0;
  let height = 0;
  let inView = true;
  let frame = 0;
  let last = 0;
  let frames = 0;

  const render = () => {
    ctx.clearRect(0, 0, width, height);
    scene.draw(ctx, palette);
    frames += 1;
    canvas.dataset.frames = String(frames);
  };

  const shouldRun = () => inView && !document.hidden && !still() && width > 0;

  const tick = (now: number) => {
    frame = 0;
    scene.step(Math.min((now - last) / 1000, 0.05));
    last = now;
    render();
    update();
  };

  /** Starts or stops the loop to match the current conditions. */
  const update = () => {
    const run = shouldRun();
    if (run && frame === 0) frame = requestAnimationFrame(tick);
    if (!run && frame !== 0) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
    canvas.dataset.state = still() ? 'still' : run ? 'running' : 'paused';
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width === width && rect.height === height) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    scene.resize(width, height);
    // Run the scene ahead a few seconds so the first frame (and the still frame) is already populated.
    for (let i = 0; i < 160; i += 1) scene.step(0.05);
    render();
    update();
  };

  // Draw straight away, then follow size changes.
  resize();
  new ResizeObserver(resize).observe(canvas);

  new IntersectionObserver((entries) => {
    inView = entries[entries.length - 1].isIntersecting;
    update();
  }).observe(canvas);

  document.addEventListener('visibilitychange', update);
  reducedMotion.addEventListener('change', () => {
    render();
    update();
  });

  new MutationObserver(() => {
    palette = readPalette();
    render();
  }).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
}
