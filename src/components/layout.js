import SideNav from "./sideNav"
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"



const Layout = ({ children }) => (
  <StaticQuery 
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>  
        <Header siteTitle={data.site.siteMetadata.title} />
        
        
        <div
          style={{
            margin: `0 auto`,
            
           
          }}
          
        >
        <SideNav/>
          <main>{children}</main>
          
        
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout