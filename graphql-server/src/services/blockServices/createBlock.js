import block from './models/block';

export async function createNewBlock(newBlock) {
  try {
    return await block.create(newBlock);
  } catch (error) {
   console.log('error add', error)
    return error;
  }
}