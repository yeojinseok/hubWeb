import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
// import MediaBrowser from "../../react-components/room/MediaBrowser";
import Myspace from "../Components/Myspace";
import Explore from "../Components/Explore";
import { hoverVariants } from "../Layout/Variants";
import { MainContainer } from "../Layout/Layout";
import { Col, Header, Nav, Tap, Title, TitleText } from "../Layout/HeaderLayout";
import { Button } from "../Layout/Button";

export default function Home() {
  const HomeMatch = useRouteMatch(["/home", "", "/"]);
  const myspaceMatch = useRouteMatch("/home/myspace");
  const exploreMatch = useRouteMatch("/home/explore");

  useEffect(() => {
    if (HomeMatch.isExact) {
      const redirectUrl = new URL("/home/explore", window.location);
      redirectUrl.search = location.search;
      window.location = redirectUrl;
    }
  }, []);

  return (
    <MainContainer>
      <Header>
        <Col>
          <Title variants={hoverVariants} whileHover="hover">
            <TitleText>스페이스</TitleText>
          </Title>
        </Col>

        <Nav>
          <Col>
            <Tap isActive={exploreMatch}>
              <Link to="/home/explore">체험</Link>
            </Tap>
            <Tap isActive={myspaceMatch}>
              <Link to="/home/myspace">마이 스페이스 </Link>{" "}
            </Tap>{" "}
          </Col>
        </Nav>
      </Header>
      <Switch>
        <Route path="/home/myspace">
          <Myspace />
        </Route>
        <Route path="/home/explore">
          <Explore />
        </Route>
      </Switch>
    </MainContainer>
  );
}
