import { CommandReqModel } from '../model';
import request from '../request';
import { ResponseMsg } from "../model/command.type";

export async function requestCommand(reqModel: CommandReqModel): Promise<{}> {
  const result: ResponseMsg<{}> = await request("/tm/client/exec", "POST", reqModel);
  return result.data;
}

