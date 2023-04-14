import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from './pages/home'
import ProjectPage from './pages/project'
import NotFound from './pages/notFound'


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          }
        },
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:3002/graphql',
  cache,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <h4>Project react graphql</h4>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects/:id' element={<ProjectPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}
export default App;
