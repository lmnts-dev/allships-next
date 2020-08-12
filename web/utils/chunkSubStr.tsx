/**
 *
 * @name chunkSubStr.tsx
 * @author Peter Laxalt
 * @description Our function to trim large chunks of text into separate strings
 *
 */
// _______________________________

export const chunkSubstr = (str: string, size: number) => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};
