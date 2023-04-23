// @ts-nocheck
import type { NextPage } from 'next'
import CardsPage from '../components/pageComponents/CardsPage'
import VideoLessonsPage from '../components/pageComponents/VideoLessonsPage'
import { useRouter } from 'next/router'
import { PageType, prisma, PrismaClient } from '@prisma/client'

// when to use static vs server side generation
// https://stackoverflow.com/questions/70873633/when-to-use-getstaticprops-and-getserverside-props-in-real-world-scenario

// This function gets called at build time and
export async function getStaticProps(context) {

  const prisma = new PrismaClient()


  // get relative path of current page (eg: "/apPhysics")
  var relPath = ""
  for (var pathStr of context.params.dynamicPath) {
    relPath += "/" + pathStr
  }

  // get a list of all paths (used for linking cards/mini cards to other paths)
  const allPages = await prisma.page.findMany()
  var pagePaths = []
  for (const page of allPages) {
    pagePaths.push(page.path)
  }

  // get navbar data for ap physics page
  const navItemData = await prisma.navItem.findMany({
    where: {
      NavItem: null,
      title: "Ap Physics"
    },
    include: {
      page: {
        include: {
          cards: true
        }
      },
    }
  })

  // get the page data for current page
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
  
  // return these values to be used as props wherever the page is initialized
  return {
    props: {
      pageData, pagePaths, navItemData
    },
  }
}

// Next.js will statically pre-render all the paths specified by getStaticPaths
export async function getStaticPaths() {
  const prisma = new PrismaClient()

  var paths = []
  const allPages = await prisma.page.findMany()
  for (const page of allPages) {
    var splitPath=page.path.toString().split("/")
    splitPath = splitPath.filter(Boolean)
    paths.push({params: {dynamicPath: splitPath}})
  }

  return {paths: paths, fallback: false}
}

// function that exists just in case. delete later if unnecessary
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

/**
 * 
 * @param pageData page's data with all cards and mini cards 
 * @param pagePaths an array of strings of all the pages' paths in the website
 * @param navItemData page data that is used for the navbar
 * @returns 
 */

const apPhysics: NextPage = ({pageData, pagePaths, navItemData}) => {
  
  // console.dir(pageData,{depth:null})

  // generate the correct page depending on the page type
  if (pageData.pageType == "cardsPage") {
    return (<CardsPage pageData={pageData} pagePaths={pagePaths} navItemData={navItemData} />)
  }
  else if (pageData.pageType == "videoLessonsPage") {
    return (<VideoLessonsPage pageData={pageData} pagePaths={pagePaths} navItemData={navItemData} />)
  }
}

export default apPhysics