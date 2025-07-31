export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      This Dashboard 
    </h1>
  )
}


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import AppLayout from "./modules/components/AppLayout";
// import Login from "./modules/auth/components/Login";
// import { useAuth } from "./modules/auth/core/action";
// import { sidebarContents } from "./constants/sidebar";
// import { RouteHasPermissions } from "./helpers/permissionHelper";
// import Register from "./modules/auth/components/Register";

// function App() {
//   const { auth } = useAuth();

//   return (
//     <>
//       <Router>
//         <Routes>
//           {auth ? (
//             <Route path="/" element={<AppLayout />}>
//               {sidebarContents.map((content, items) => (
//                 <Route
//                   key={items}
//                   path={`${content.path}`.slice(1)}
//                   element={
//                     <RouteHasPermissions per={content.module}>
//                       {content.element}
//                     </RouteHasPermissions>
//                   }
//                 />
//               ))}
//               <Route path="*" element={<Navigate to="/" />} />
//             </Route>
//           ) : (
//             <>
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="*" element={<Navigate to="/login" />} />
//             </>
//           )}
//         </Routes>
//       </Router>
//     </>
//   );
// }
// export default App;
