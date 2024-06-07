"use client";
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd'
import Link from 'next/link';
import React from 'react'

export const SignupForm = () => {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (

     <div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">

				<div className="w-full xl:w-3/4 lg:w-11/12 flex">

					<div className="w-full h-auto bg-[#5B53D1] hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-1/2 bg-cover rounded-l-lg">
            <h1 className="text-white mb-4 font-bold text-lg">Uniendo Comunidades y Rescatistas</h1>
            <img src="/images/mascotas.png" alt="" className="rounded-full h-48 w-48 object-cover object-center" />
          </div>


					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Username
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="mb-4">
                  <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                  <label className="text-sm">
                    Remember Me
                  </label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Create an Account!
                  </a>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
					</div>
				</div>
			</div>
		</div>
  )
}
