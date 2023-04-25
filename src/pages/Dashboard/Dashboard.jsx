import React from "react";
import { Section } from "../../components/Section/Section";
import { BooksList } from "../../components/Dashboard/BooksList/BooksList";
import { AddBook } from "../../components/AddBook/AddBook";
import { DashboardWrapper } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <DashboardWrapper>
			<Section>
				<AddBook />
			</Section>
      <Section>
        <BooksList />
      </Section>
    </DashboardWrapper>
  );
};

export default Dashboard;
