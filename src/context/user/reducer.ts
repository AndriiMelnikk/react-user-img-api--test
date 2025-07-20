import UserPhotoAPI from '../../api/user-photo';
import CleatErrorContext from '../../hooks/CleatErrorContext';
import { GetUsersParams, StatusReq } from '../../types/api';
import { DispatchAction } from './type';

class Thunk {
  async getUsers(dispatch: DispatchAction, params: GetUsersParams) {
    try {
      dispatch({ status: StatusReq.pending });

      const result = await UserPhotoAPI.getUsers(params);

      dispatch({
        status: StatusReq.resolved,
        users: result,
      });
      
    } catch (error) {
      dispatch({ status: StatusReq.rejected, error });
      CleatErrorContext(dispatch, { status: StatusReq.idle, error: null });
    }
  }
}
export default new Thunk();
