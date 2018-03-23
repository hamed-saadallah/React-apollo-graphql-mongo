import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import { BlocksType } from './blockTypes';
import { getBlocks } from '../../services/blockServices/getBlocks';

const blocksQuery = {
  type: BlocksType,
  resolve: () =>getBlocks(),
}

export { blocksQuery }