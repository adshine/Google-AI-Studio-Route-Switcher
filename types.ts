// Fix: Import React to resolve "Cannot find namespace 'React'".
import React from 'react';

export interface AppRoute {
  path: string;
  name: string;
  component: React.ComponentType;
}
