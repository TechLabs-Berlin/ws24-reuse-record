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
  type: 'openable' | 'fixed' ;
  frame?: Frame;
  glass: Glass;
}

export interface Factor {
  x: number[];
  y: number[];
  input: {
    x: number[];
    y: number[];
  },
  res: {
    x: number[];
    y: number[];
  }
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
  _id: string;
}
