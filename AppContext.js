import React from 'react';

const context = {
    todos: [],
    setTodos: () => {},
    isRefresh: true,
    setIsRefresh: () => {},
};

export const AppContext = React.createContext(context);
