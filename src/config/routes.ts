import React from "react";
import { ErrorHandling } from '../components/error-handling';

interface RouteInterface {
    id: string;
    component: React.FunctionComponent;
    path?: string;
    paths?: string[];
  }

  export const ERRORHANDLING: RouteInterface = {
    id: 'errorHandling',
    component: ErrorHandling,
    path: '/errorHandling',
  };

  export default [ ERRORHANDLING ];