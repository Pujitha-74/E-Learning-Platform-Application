"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Play, Clock, Star, BookOpen, CheckCircle, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"

export default function CoursePage({ params }: { params: { id: string } }) {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [isEnrolled, setIsEnrolled] = useState(true) // Simulate enrollment status

  // Mock course data - in real app, this would be fetched based on params.id
  const course = {
    id: params.id,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.8,
    students: 12450,
    duration: "40 hours",
    lessons: 12,
    price: "$89.99",
    description:
      "Master React from basics to advanced concepts with hands-on projects. This comprehensive course covers everything from React fundamentals to advanced patterns and best practices.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    progress: 75,
    completedLessons: 9,
  }

  const lessons = [
    { id: 1, title: "Introduction to React", duration: "15:30", completed: true, locked: false },
    { id: 2, title: "Setting up Development Environment", duration: "12:45", completed: true, locked: false },
    { id: 3, title: "JSX and Components", duration: "18:20", completed: true, locked: false },
    { id: 4, title: "Props and State", duration: "22:15", completed: true, locked: false },
    { id: 5, title: "Event Handling", duration: "16:40", completed: true, locked: false },
    { id: 6, title: "Conditional Rendering", duration: "14:25", completed: true, locked: false },
    { id: 7, title: "Lists and Keys", duration: "19:10", completed: true, locked: false },
    { id: 8, title: "Forms in React", duration: "25:30", completed: true, locked: false },
    { id: 9, title: "React Hooks - useState", duration: "20:45", completed: true, locked: false },
    { id: 10, title: "React Hooks - useEffect", duration: "28:15", completed: false, locked: false },
    { id: 11, title: "Context API", duration: "24:50", completed: false, locked: !isEnrolled },
    { id: 12, title: "Building a Complete Project", duration: "45:30", completed: false, locked: !isEnrolled },
  ]

  const currentLessonData = lessons[currentLesson]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/courses" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative bg-black rounded-t-lg overflow-hidden">
                  <video className="w-full aspect-video" controls poster={course.thumbnail}>
                    <source src="/placeholder-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{currentLessonData.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {currentLessonData.duration}
                    </span>
                    <span>
                      Lesson {currentLesson + 1} of {lessons.length}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Info Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">What you'll learn:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• React fundamentals and core concepts</li>
                          <li>• Component-based architecture</li>
                          <li>• State management with hooks</li>
                          <li>• Building real-world applications</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Prerequisites:</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>• Basic HTML, CSS, and JavaScript</li>
                          <li>• Familiarity with ES6+ features</li>
                          <li>• Understanding of web development basics</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {lessons.map((lesson, index) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                            currentLesson === index ? "bg-blue-50 border-blue-200" : ""
                          }`}
                          onClick={() => !lesson.locked && setCurrentLesson(index)}
                        >
                          <div className="flex items-center gap-3">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : lesson.locked ? (
                              <Lock className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Play className="h-5 w-5 text-blue-500" />
                            )}
                            <div>
                              <p className={`font-medium ${lesson.locked ? "text-gray-400" : ""}`}>{lesson.title}</p>
                              <p className="text-sm text-gray-500">{lesson.duration}</p>
                            </div>
                          </div>
                          {lesson.locked && <Badge variant="outline">Premium</Badge>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "John Doe",
                          rating: 5,
                          comment: "Excellent course! Very well structured and easy to follow.",
                          date: "2 days ago",
                        },
                        {
                          name: "Jane Smith",
                          rating: 4,
                          comment: "Great content, but could use more practical examples.",
                          date: "1 week ago",
                        },
                        {
                          name: "Mike Johnson",
                          rating: 5,
                          comment: "Best React course I've taken. Highly recommended!",
                          date: "2 weeks ago",
                        },
                      ].map((review, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-medium">{review.name}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Info Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-600">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{course.duration} total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-gray-400" />
                    <span>Downloadable resources</span>
                  </div>
                </div>

                {isEnrolled ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Your Progress</span>
                        <span>
                          {course.completedLessons}/{course.lessons} lessons
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-sm text-gray-600 mt-1">{course.progress}% complete</p>
                    </div>
                    <Button className="w-full">Continue Learning</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                    </div>
                    <Button className="w-full" onClick={() => setIsEnrolled(true)}>
                      Enroll Now
                    </Button>
                    <p className="text-xs text-gray-500 text-center">30-day money-back guarantee</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Instructor Card */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-sm text-gray-600">Senior React Developer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Sarah is a senior developer with 8+ years of experience in React and modern web development.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span>45,230</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Courses:</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rating:</span>
                    <span>4.9 ⭐</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
