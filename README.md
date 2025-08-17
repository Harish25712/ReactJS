 with empty dependency array ([]) -> useeffect is called on initial render (only once) -> preferred
 without dependency array -> useeffect is called on every render
 with dependency array  ([obj]) ->useeffect is called everytime when your dependency array (obj) is updated

Routerprovider
useRouteError

CreateBrowserRouter
  element
  path
  errorelement
  childrenRoutes -> outlet(will not be visible in html)=

Link(preferred) vs a tag (will not be visible in html,rather a href will be present -> behind the scenes Link uses a tag)

React -> Single page application (client side routing)

server side routing:
-> network call -> fetches the data from server
-> navigating to a new page involves making an HTTP request to the server, which then responds with a new HTML document.

client side routing (preferred approach via Link tag) :
-> navigate within the application without requiring a full page reload.
-> allows the application to update the URL and render new content without making a new request to the server.

dynamic routing -> useParams -> returns an object