import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, NavList, NavListItem } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <NavList>
                <NavListItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </NavListItem>
                <NavListItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </NavListItem>
            </NavList>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);