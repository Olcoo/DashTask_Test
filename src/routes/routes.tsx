import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../Auth/ProtectedRoute";
import { AddNewContactPage, CalenderPage, ContactPage, DashboardPage, FavoritesPage, InboxPage, InvoicePage, Layout, LoginPage, LogoutPage, NoMatchPage, OrderListsPage, PricingPage, ProductsPage, ProductsStockPage, RegisterPage, SettingsPage, TablePage, TeamPage, ToDoPage, UiElementsPage } from "../pages";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            element: <ProtectedRoute><Layout/></ProtectedRoute>,
            children: [
                {
                    index: true, element: <DashboardPage/>,
                },
                {
                    path: 'products', element: <ProductsPage/>,
                },
                {
                    path: 'favorites', element: <FavoritesPage/>,   
                },
                {
                    path: 'inbox', element: <InboxPage/>,
                },
                {
                    path: 'orderlists', element: <OrderListsPage/>,
                },
                {
                    path: 'productstock', element: <ProductsStockPage/>,
                },
                {
                    path: 'pricing', element: <PricingPage/>,
                },
                {
                    path: 'calender', element: <CalenderPage/>,
                },
                {
                    path: 'todo', element: <ToDoPage/>,
                },
                {
                  path: 'contact',
                  children: [
                    {
                        index: true, element: <ContactPage/>,
                    },
                    {
                      path: 'new', element: <AddNewContactPage/>,
                    },
                  ],  
                },
                {
                  path: 'invoice', element: <InvoicePage/>,  
                },
                {
                  path: 'uielements', element: <UiElementsPage/>,  
                },
                {
                  path: 'team', element: <TeamPage/>,  
                },
                {
                  path: 'table', element: <TablePage/>,  
                },
                {
                  path: 'settings', element: <SettingsPage/>,  
                },
                {
                  path: 'logout', element: <LogoutPage/>,
                },
            ],
        },
        {
          path: 'login', element: <LoginPage/>,  
        },
        {
          path: 'register', element: <RegisterPage/>,  
        },
        {
          path: '*', element: <NoMatchPage/>
        },
    ]);


    return(
        <RouterProvider router={router}/>
    );
};

export default AppRoutes;