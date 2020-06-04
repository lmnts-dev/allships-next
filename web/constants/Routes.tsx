// Begin Component
//////////////////////////////////////////////////////////////////////

/**
 *
 * Routes.js:
 * @author Peter Laxalt
 * @description
 * This file is primarily used to create URL structure
 * for our various routes.
 *
 */
const Routes = {
  root: "/",
  siteUrl: "web.peterlaxalt.now.sh",
  pages: {
    work: {
      root: "/work",
      sub: {
        location: {
          root: "/location",
          sub: {
            country: "/country"
          }
        }
      }
    },
    brainjuice: {
      root: "/brainjuice",
      sub: {
        resources: "/resources"
      }
    },
    approach: {
      root: "/approach"
    },
    culture: {
      root: "/culture"
    },
    careers: {
      root: "/careers"
    },
    clients: {
      root: "/clients"
    },
    contact: {
      root: "/contact"
    }
  }
};

export default Routes;
