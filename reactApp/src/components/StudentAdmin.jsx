import React, { useState } from 'react'

function StudentAdmin() {
    const [student, setStudent] = useState([]);
    async function showData(e) {
        e.preventDefault();
        const sid = e.target.sid.value;
        alert("hii" + sid);
        if(sid == '*'){

            const response = await fetch("https://student-app-znaw.onrender.com/admin/show");
            const res = await response.json();
            setStudent(res.msg);
            console.log(res.msg);
        }
        else{
            const response = await fetch(`https://student-app-znaw.onrender.com/admin/showByEmailId/${sid}`);
            const res = await response.json();
            setStudent(Array.isArray(res.msg)? res.msg : [res.msg]);
            console.log(Array.isArray(res.msg)? res.msg : [res.msg]);Array.isArray(res.msg)? res.msg : [res.msg]
        }
    }

    async function deleteUser(email) {
        console.log(email)
        const response = await fetch(`https://student-app-znaw.onrender.com/admin/deleteByEmailId/${email}`,{
            method: 'DELETE'
        });
        const res = await response.json();
        alert("User Deleted Successfully")
    }
    return (
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow-2xl font-sans">
        <div className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white text-3xl font-bold py-4 rounded-xl mb-8 text-center shadow-md">
          🎓 StudentAdmin
        </div>
  
        <form onSubmit={showData} className="space-y-5">
          <input 
            type="text" 
            name="sid" 
            placeholder="🔎 Enter * StudentId" 
            className="w-full px-5 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-amber-500 shadow-sm"
          />
  
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-amber-700 to-yellow-600 hover:from-amber-800 hover:to-yellow-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Search Student
            </button>
          </div>
        </form>
  
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">📄 Output</h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full text-left text-gray-700 bg-gray-50 shadow-md rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-amber-100 text-amber-800 uppercase text-sm tracking-wider">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3 text-center">Delete</th>
                  <th className="px-6 py-3 text-center">Update</th>
                </tr>
              </thead>
              <tbody>
                {student.length > 0 ? (
                  student.map((data, index) => (
                    <tr key={index} className="bg-white border-t hover:bg-gray-100">
                      <td className="px-6 py-4">{data.name}</td>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4 text-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full text-sm shadow"
                         onClick={()=>{deleteUser(student.email)}}>
                          Delete
                        </button>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-full text-sm shadow">
                          Update
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-400">
                      No student data found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default StudentAdmin