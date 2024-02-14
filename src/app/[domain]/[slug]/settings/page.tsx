import { getAuthorizeRequest, getGuestRequest } from "@/services/swrhelper";
import { getApiBaseUrl } from "@/utils/getApiBaseUrl";
import { getServerBaseUrl } from "@/utils/getServerBaseUrl";
import { getServerSubdomain } from "@/utils/getServerSubdomain";
import Divider from "@mui/material/Divider";


async function getTodoList(subDomain: string) {
  const data = (await getAuthorizeRequest("todos", subDomain)) as any;
  return data.todos ? data.todos : data;
}

const Settings = async () => {
  let todoList = [];
  const subDomain = getServerSubdomain();
  let APIbaseUrl = getApiBaseUrl(subDomain);
  if (subDomain) {
    todoList = (await getTodoList(subDomain)) as Array<any>;
    console.log(todoList);
  }

  return (
    <div>
      <h1>Arc User Settings</h1>
      <Divider></Divider>
      <p>{"Server Side Base URL => " + getServerBaseUrl()}</p>
      <p>{`API Base URL => ` + APIbaseUrl}</p>
      <p>Data : Todo List</p>
      {todoList && todoList?.map((todo) => <p key={todo.id}>{todo.todo ? todo.todo : todo.title }</p>)}
    </div>
  );
};

export default Settings;
