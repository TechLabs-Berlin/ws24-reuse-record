export interface Profile {
  width: number;
  offsetOutXY: number;
  offsetInXY: number;
  depth: number;
}

export interface Glass {
  width: number;
  height: number;
  type: 'double' | 'single';
}

export interface Frame {
  width: number;
  height: number;
  material?: string;
  surface?: string;
  colour?: string;
  profile: Profile;
}

export interface Cell {
  width: number;
  height: number;
  type: 'openable' | 'fixed' | 'parapet';
  frame?: Frame;
  glass: Glass;
}

export interface Factor {
  x: number[];
  y: number[];
}

export interface Count {
  x: number;
  y: number;
}

export interface Grid {
  width: number;
  height: number;
  count: Count;
  factor: Factor;
  frame: Frame;
  cells: Cell[];
}

export interface SeedWindow {
  grid: Grid;
}

export const seedWindows: SeedWindow[] = [
  {
    grid: {
      width: 200,
      height: 200,
      count: {
        x: 2,
        y: 2,
      },
      factor: {
        x: [1, 2],
        y: [2, 1],
      },
      frame: {
        width: 210,
        height: 210,
        material: 'wood',
        surface: 'stained',
        colour: 'brown',
        profile: {
          width: 8,
          offsetOutXY: 2,
          offsetInXY: 6,
          depth: 6,
        },
      },
      cells: [
        {
          width: 100,
          height: 100,
          type: 'parapet',
          frame: {
            width: 92,
            height: 92,
            profile: {
              width: 8,
              offsetOutXY: 2,
              offsetInXY: 6,
              depth: 6,
            },
          },
          glass: {
            width: 76,
            height: 76,
            type: 'double',
          },
        },
        {
          width: 100,
          height: 100,
          type: 'openable',
          frame: {
            width: 92,
            height: 92,
            profile: {
              width: 8,
              offsetOutXY: 2,
              offsetInXY: 6,
              depth: 6,
            },
          },
          glass: {
            width: 76,
            height: 76,
            type: 'double',
          },
        },
        {
          width: 100,
          height: 100,
          type: 'fixed',
          frame: {
            width: 92,
            height: 92,
            profile: {
              width: 8,
              offsetOutXY: 2,
              offsetInXY: 6,
              depth: 6,
            },
          },
          glass: {
            width: 76,
            height: 76,
            type: 'double',
          },
        },
        {
          width: 100,
          height: 100,
          type: 'openable',
          frame: {
            width: 92,
            height: 92,
            profile: {
              width: 8,
              offsetOutXY: 2,
              offsetInXY: 6,
              depth: 6,
            },
          },
          glass: {
            width: 76,
            height: 76,
            type: 'double',
          },
        },
      ],
    },
  },

  {
    grid: {
      width: 100,
      height: 200,
      count: {
        x: 1,
        y: 2,
      },
      factor: {
        x: [1],
        y: [1, 1],
      },
      frame: {
        width: 104,
        height: 204,
        material: 'wood',
        surface: 'stained',
        colour: 'brown',
        profile: {
          width: 8,
          offsetOutXY: 2,
          offsetInXY: 6,
          depth: 6,
        },
      },
      cells: [
        {
          width: 100,
          height: 100,
          type: 'fixed',
          glass: {
            width: 88,
            height: 88,
            type: 'double',
          },
        },
        {
          width: 100,
          height: 100,
          type: 'openable',
          frame: {
            width: 92,
            height: 92,
            profile: {
              width: 8,
              offsetOutXY: 2,
              offsetInXY: 6,
              depth: 6,
            },
          },
          glass: {
            width: 76,
            height: 76,
            type: 'double',
          },
        },
      ],
    },
  },

  {
    grid: {
      width: 50,
      height: 100,
      count: {
        x: 1,
        y: 1,
      },
      factor: {
        x: [1],
        y: [1],
      },
      frame: {
        width: 54,
        height: 104,
        material: 'wood',
        surface: 'stained',
        colour: 'brown',
        profile: {
          width: 8,
          offsetOutXY: 2,
          offsetInXY: 6,
          depth: 6,
        },
      },
      cells: [
        {
          width: 50,
          height: 100,
          type: 'fixed',
          glass: {
            width: 38,
            height: 88,
            type: 'single',
          },
        },
      ],
    },
  },
];
