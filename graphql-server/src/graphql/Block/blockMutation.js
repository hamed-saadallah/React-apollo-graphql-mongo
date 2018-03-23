import { GraphQLNonNull } from 'graphql';
import { BlockType, BlockInputType } from './blockTypes';
import {createNewBlock} from '../../services/blockServices/createBlock';

const blockMutation = {
  type: BlockType,
  args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(BlockInputType)
		}
	},
  resolve: (_, { data }) => createNewBlock(data)
}

export default { addBlock: blockMutation }