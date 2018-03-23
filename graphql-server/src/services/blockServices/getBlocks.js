import block from './models/block';

export  const getBlocks  = async () => {
  try {
    const blocks = await block.find().lean();
    return ({ blocks: blocks });
  } catch (error) {
    return { error };
  }
};