import connectDB from '../../../utils/database';
import { ItemModel } from '../../../utils/schemaModels';

const getAllItems = async (req, res) => {
  try {
    await connectDB();
    const allItems = await ItemModel.find();
    return res
      .status(200)
      .json({ message: 'アイテム読み取り成功(All)', allItems: allItems });
  } catch {
    return res.status(400).json({ message: 'アイテム読み取り失敗(All)' });
  }
};

export default getAllItems;
