import { useState } from 'react'
import Home from './routes/Home';
import Chat from './routes/Chat';

import './App.css'

import {
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";

const router = createBrowserRouter([
  {
  path: '/',
  element: <Chat />,
  },
  {
    path: '/Chat',
    element: <Home />,
    },
 ]);
 export default function App() {
  return <RouterProvider router={router} />;
 }