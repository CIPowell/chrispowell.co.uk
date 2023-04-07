
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import ErrorPage from "./ErrorPage";
import { useLocation } from "react-router-dom";

// Put your API key here
builder.init("22644214b95c46deab8d7849131f4881");

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function Page() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);
  let location = useLocation();

  // get the page content from Builder
   useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
       document.title = content.data.title
      }
    }
    fetchContent();
  }, [location.pathname]);
  
  // If no page is found, return 
  // a 404 page from your code.
  // The following hypothetical 
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <ErrorPage/>
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <main role="main">
        <BuilderComponent model="page" role="main" content={content} />
      </main>
    </>
  );
}