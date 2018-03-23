import { BlocksType } from './blockTypes';
import getBlocks from '../../services/blocksServices/getBlocks';

const blocksQuery = {
  type: BlocksType,
  resolve: () => getBlocks()
}
console.log('blocksQuery', BlocksType);
export { blocksQuery }
