// @ts-nocheck
import type { NextPage } from 'next'
import CardsPage from '../components/pageComponents/CardsPage'
import VideoLessonsPage from '../components/pageComponents/VideoLessonsPage'
import { useRouter } from 'next/router'
import { PageType, prisma, PrismaClient } from '@prisma/client'


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

// when to use static vs server side generation
// https://stackoverflow.com/questions/70873633/when-to-use-getstaticprops-and-getserverside-props-in-real-world-scenario

// This function gets called at build time
export async function getStaticProps(context) {
  // const page = await.

  const prisma = new PrismaClient()
  // console.log(typeof(context.params.dynamicPath))
  var relPath = ""
  for (var pathStr of context.params.dynamicPath) {
    relPath += "/" + pathStr
  }
  console.log(relPath)

  const allPages = await prisma.page.findMany()
  var pagePaths = []
  for (const page of allPages) {
    pagePaths.push(page.path)
  }


  const pageData = await prisma.page.findUnique({
    where : {
      path: relPath,
    },
    include: {
      cards: {
        orderBy: {
          orderNum: "asc"
        }
      },
      miniCards: true,
      chapters: {
        include: {
          subChapters: {
            include: {
              videoItems: {
                orderBy: {
                  orderNum: "asc"
                }
              }
            },
            orderBy: {
              orderNum: "asc"
            }
          }
        },
        orderBy: {
          orderNum: "asc"
        }
      } 
    }
  })
  
  // console.log(page)

  return {
    props: {
      allData, pageData, pagePaths
    },
  }
}

async function resetData(prisma) {

  await prisma.videoItem.deleteMany()
  await prisma.subChapter.deleteMany()
  await prisma.chapter.deleteMany()
  await prisma.miniCard.deleteMany()
  await prisma.card.deleteMany()
  await prisma.page.deleteMany()




  await prisma.page.create({
    data: {
      path: "/apPhysics",
      titleName: "AP PHYSICS C",
      titleSize: "4.5em",
      pageType: "cardsPage",
      cards: {
        create: [
          {
            relPath: "/video-lessons",
            title: "Video Lessons",
            imagePath: "/apPhysics/video-lessons.jpg",
          },
          {
            relPath: "/homework-solutions",
            title: "Homework Solutions",
            imagePath: "/apPhysics/hw-solutions.jpg",
          },
          {
            relPath: "/physics-honors",
            title: "Notes, Presentations, Supplemental Vidoes",
            imagePath: "/apPhysics/others.jpg",
          },
        ]
      },
      miniCards: {
        create: [
          {
            title: "AP Exam Preparation",
            relPath: "/physics-honors"
          },
          {
            title: "Text Book Information",
            relPath: "/physics-honors2"
          },
          {
            title: "Green Sheet",
            relPath: "/physics-honors3"
          },
          {
            title: "Lynbrook's Academic Honesty Policy",
            relPath: "/physics-honors4"
          },
          {
            title: "Labs",
            relPath: "/physics-honors5"
          },
          {
            title: "Green Stuff",
            relPath: "/physics-honors6"
          },
        ]
      },
    },
    include: {
      cards: true,
      miniCards: true,
    }
  })

  await prisma.page.create({
    data: {
      path: "/apPhysics/video-lessons",
      titleName: "Video Lessons",
      titleSize: "3em",
      pageType: "videoLessonsPage",
      chapters: {
        create : [
          {
            title: "Chapter 2",
            subChapters: {
              create: [
                {
                  title: "2.3-2.5",
                  videoItems: {
                    create: [
                      {
                        title: "Position and Displacement, Average Velocity and Average Speed",
                        link: "https://www.youtube.com/watch?v=4Tm6Z1y3h94"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    include: {
      chapters: true,
    }
  })

}

export async function getStaticPaths() {
  const prisma = new PrismaClient()

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
    paths.push({params: {dynamicPath: splitPath}})
  }
  



  return {paths: paths, fallback: false}
}

{/* @ts-ignore  */}
const apPhysics: NextPage = ({allData, pageData, pagePaths}) => {

  const { asPath } = useRouter()

  // console.log({asPath, basePath})

  var relPath = asPath.split(/[?#]/)[0]
  // console.log(pageData)
  // console.log(pageData.titleName)
  // console.log(allData[relPath])
  // console.log("location:", relPath)
  // console.log(pageData)
  // console.log(typeof(pageData))
  console.dir(pageData,{depth:null})

  // // const keys = allData.keys();
  // console.log("KEYSSSSS")
  // console.log(keys)

  console.log("PAGE PATHSSSS")
  console.log(pagePaths)

  if (pageData.pageType == "cardsPage") {
    return (<CardsPage myData={pageData} pagePaths={pagePaths} />)
  }
  else if (pageData.pageType == "videoLessonsPage") {
    return (<VideoLessonsPage myData={pageData} pagePaths={pagePaths} />)
  }
}

export default apPhysics
