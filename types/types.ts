export interface File {
  name: string;
  type: 'file' | 'folder';
  content?: string;
  children?: FileStructure;
}

export interface FileStructure {
  [key: string]: File;
}
