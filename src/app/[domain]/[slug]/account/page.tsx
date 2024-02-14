"use client";
import { getAuthorizeRequest } from "@/services/swrhelper";
import { getApiBaseUrl } from "@/utils/getApiBaseUrl";
import { getClientSubdomain } from "@/utils/getClientSubdomain";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

interface TodoList {
  limit: number;
  skip: number;
  todos: any[];
  total: number;
}

const Account = () => {  
  const [apiURL, setApiURL] = useState("");
  const [todoList, setTodoList] = useState<any[]>([]);
  const subDomain = getClientSubdomain();   

  useEffect(() => {                   
    if (subDomain) { 
      console.log("Subdomain => ", subDomain);
      const APIBaseUrl = getApiBaseUrl(subDomain);
      if(APIBaseUrl){
        setApiURL(APIBaseUrl);
      }
      getAuthorizeRequest("todos", subDomain).then(response => {        
        if (APIBaseUrl?.includes('jsonplaceholder')){
          const todoResponse = response as any[]
          setTodoList(todoResponse)
        } else if (APIBaseUrl?.includes('dummyjson')){
          const todoResponse = response as TodoList
          setTodoList(todoResponse.todos)
        }                        
      })                  
    }
  }, [subDomain]);

  return (
    <div>
      <h1>Arc User Account</h1>
      <Divider></Divider>      
      {apiURL && (<p>{`API Base URL => ` + apiURL}</p>)}
      {todoList && (<p>Data : Todo List</p>)}  
      {todoList.length > 0 && todoList?.map((todo) => <p key={todo.id}>{todo.todo ? todo.todo : todo.title}</p>)}
    </div>
  );
};

export default Account;
