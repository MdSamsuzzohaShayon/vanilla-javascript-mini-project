import { csvFormat } from 'd3';
export const message = data => data.length + " - Rows; " + data.columns.length + " - Columns; " + Math.round(csvFormat(data).length / 1024) + " - kB";