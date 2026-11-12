import type { Palette, Scene } from './hero-background';

/** Fragments from the story: VBA, Java, UiPath, TypeScript. Each column spells one, top to bottom. */
const FRAGMENTS = [
  'Sub',
  'End Sub',
  'Dim',
  'public static void',
  '=>',
  '{ }',
  'Invoke Workflow',
  'in_Config',
  'const',
  'interface',
  'If',
  'Next',
  'return',
];

const COLUMN_WIDTH = 24;
const ROW_HEIGHT = 20;
const FONT = "600 14px ui-monospace, 'Cascadia Code', 'SF Mono', Menlo, Consolas, monospace";

interface Column {
  x: number;
  text: string;
  /** Row of the leading character; fractional while it moves. */
  head: number;
  /** Rows per second. */
  speed: number;
  trail: number;
  offset: number;
  active: boolean;
}

const pick = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

export function createRain(): Scene {
  let columns: Column[] = [];
  let rows = 0;

  const restart = (column: Column, fromTop: boolean) => {
    column.text = pick(FRAGMENTS) + '  ';
    column.speed = 1.5 + Math.random() * 2;
    column.trail = 7 + Math.floor(Math.random() * 9);
    column.offset = Math.floor(Math.random() * column.text.length);
    // Stagger the starts so the columns never fall in step with each other.
    column.head = fromTop ? -Math.random() * rows * 0.5 : Math.random() * rows;
    // Leave some columns empty so the effect stays light.
    column.active = Math.random() > 0.3;
  };

  return {
    resize(width, height) {
      rows = Math.ceil(height / ROW_HEIGHT);
      const count = Math.ceil(width / COLUMN_WIDTH);
      columns = Array.from({ length: count }, (_, index) => {
        const column: Column = {
          x: index * COLUMN_WIDTH + COLUMN_WIDTH / 2,
          text: '',
          head: 0,
          speed: 0,
          trail: 0,
          offset: 0,
          active: true,
        };
        restart(column, false);
        return column;
      });
    },

    step(seconds) {
      for (const column of columns) {
        column.head += column.speed * seconds;
        if (column.head - column.trail > rows) restart(column, true);
      }
    },

    draw(ctx, palette: Palette) {
      ctx.font = FONT;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = palette.accent;

      for (const column of columns) {
        if (!column.active) continue;
        const head = Math.floor(column.head);
        for (let k = 0; k <= column.trail; k += 1) {
          const row = head - k;
          if (row < 0 || row > rows) continue;
          const length = column.text.length;
          const char = column.text[(((row - column.offset) % length) + length) % length];
          if (char === ' ') continue;
          ctx.globalAlpha = k === 0 ? 0.85 : 0.5 * (1 - k / column.trail);
          ctx.fillText(char, column.x, row * ROW_HEIGHT);
        }
      }
      ctx.globalAlpha = 1;
    },
  };
}
