// @ts-nocheck
import type { NextPage } from 'next'
import CardsPage from '../components/pageComponents/CardsPage'
import VideoLessonsPage from '../components/pageComponents/VideoLessonsPage'
import { useRouter } from 'next/router'


var allData = {
  "/apPhysics" : {
    "type" : "cardsPage",
    "title" : {
      "name" : "AP PHYSICS C",
      "font-size" : "4.5em"
    },
    "path" : ["apPhysics", "hii"],
    "cards": {
      "Video Lessons" : {
        link: "/video-lessons",
        image_path: "/apPhysics/video-lessons.jpg"
      },
      "Homework Solutions" : {
        link: "/homework-solutions",
        image_path: "/apPhysics/hw-solutions.jpg"
      },
      "Notes, Presentations, Supplemental Vidoes" : {
        link: "/physics-honors",
        image_path: "/apPhysics/others.jpg"
      },
    },
    "mini cards": {
      "AP Exam Preperation" : {
        link: "/physics-honors"
      },
      "Text Book Information" : {
        link: "/physics-honors"
      },
      "Green Sheet" : {
        link: "/physics-honors"
      },
      "Lynbrook's Academic Honesty Policy" : {
        link: "/physics-honors"
      },
      "Labs" : {
        link: "/physics-honors"
      },
      "Green Stuff" : {
        link: "/physics-honors"
      },
    }
  },
  "/apPhysics/video-lessons": {
    "type" : "videoLessonsPage",
    "title" : {
      "name" : "AP PHYSICS C",
      "font-size" : "4.5em"
    },
    "chapters" : {
      "Chapter 2": {
        "2.3-2.5" : {
          "Position and Displacement, Average Velocity and Average Speed" : {
            "link" : "https://www.youtube.com/watch?v=4Tm6Z1y3h94"
          },
          "Instantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          }
        }
      },
      "Chapter 9": {
        "2.3-2.5" : {
          "Position and Displacement, Average Velocity and Average Speed" : {
            "link" : "https://www.youtube.com/"
          },
          "Instantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
        },
        "2.3-2.56" : {
          "Position and Displacement, Average Velocity and Average Speed" : {
            "link" : "https://www.youtube.com/"
          },
          "Instantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
          "aInstantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
          "bInstantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
          "cInstantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
          "dInstantaneous Velocity and Speed (11:25)" : {
            "link" : "https://www.youtube.com/"
          },
        }
      }
    }
  }
}

// This function gets called at build time
export async function getStaticProps() {
//   var cardsPageContent = {
    
// }

// const paths = {
//   params: {
//     id: "apPhysics"
//   }
// }
  // // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      allData,
    },
  }
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // // Get the paths we want to pre-render based on posts
  // const paths = allData.map((allData) => ({
  //   params: { cardsPagePath:  allData[]},
  // }))

  var paths = []
  for (var path in allData) {
    var splitPath=path.toString().split("/");
    splitPath = splitPath.filter(Boolean)
    console.log(splitPath)
    paths.push({params: {dynamicPath: splitPath}})
  }

  console.log(paths)


  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // return { paths: [{params: {id: "ap-physics/cool"}}], fallback: false }
  // return { paths: [{params: {cardsPagePath: ["apPhysics", "hii"]}}, {params: {cardsPagePath: ["hello"]}}], fallback: false }
  return {paths: paths, fallback: false}
}

{/* @ts-ignore  */}
const apPhysics: NextPage = ({allData}) => {
  const { asPath } = useRouter()
    console.log({asPath})
    console.log(allData[asPath])

  if (allData[asPath]["type"] == "cardsPage") {
    return (<CardsPage content={allData[asPath]} />)
  }
  else if (allData[asPath]["type"] == "videoLessonsPage") {
    return (<VideoLessonsPage content={allData[asPath]} />)
  }
}

export default apPhysics
