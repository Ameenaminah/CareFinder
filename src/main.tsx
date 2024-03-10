import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ServicesProvider } from "./service/ioc/serviceDependency.tsx";
import { createServices } from "./service/ioc/serviceCreator.ts";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store.ts";
import { PersistGate } from "redux-persist/integration/react";

const services = createServices();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarProvider>
        <QueryClientProvider client={queryClient}>
          <ServicesProvider services={services}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </ServicesProvider>
        </QueryClientProvider>
      </SidebarProvider>
    </Provider>
  </React.StrictMode>
);
