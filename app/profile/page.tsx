"use client"

import { useState } from "react"
import { User, BookOpen, Award, Clock, TrendingUp, Calendar, Download, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navigation from "@/components/navigation"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const userStats = {
    coursesEnrolled: 12,
    coursesCompleted: 8,
    totalHours: 156,
    certificates: 5,
    currentStreak: 15,
    joinDate: "January 2024",
  }

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Johnson",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      lastAccessed: "2 hours ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      instructor: "Mike Chen",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      lastAccessed: "1 day ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Davis",
      progress: 20,
      totalLessons: 10,
      completedLessons: 2,
      lastAccessed: "3 days ago",
      thumbnail: "/placeholder.svg?height=120&width=200",
    },
  ]

  const completedCourses = [
    {
      id: 4,
      title: "HTML & CSS Fundamentals",
      instructor: "John Smith",
      completedDate: "March 15, 2024",
      certificate: true,
      rating: 5,
    },
    {
      id: 5,
      title: "JavaScript Basics",
      instructor: "Lisa Wang",
      completedDate: "February 28, 2024",
      certificate: true,
      rating: 4,
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "React Development Certification",
      issueDate: "March 20, 2024",
      course: "Complete React Developer Course",
    },
    {
      id: 2,
      title: "JavaScript Mastery Certificate",
      issueDate: "March 1, 2024",
      course: "JavaScript Advanced Concepts",
    },
  ]

  const achievements = [
    { title: "First Course Completed", description: "Completed your first course", earned: true },
    { title: "Week Warrior", description: "7-day learning streak", earned: true },
    { title: "Knowledge Seeker", description: "Enrolled in 10+ courses", earned: true },
    { title: "Certificate Collector", description: "Earned 5 certificates", earned: true },
    { title: "Master Learner", description: "100+ hours of learning", earned: true },
    { title: "Consistency King", description: "30-day learning streak", earned: false },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
              <p className="text-gray-600 mb-4">Full Stack Developer | Lifelong Learner</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {userStats.joinDate}
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  {userStats.currentStreak} day streak
                </span>
              </div>
            </div>
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Courses Enrolled</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.coursesEnrolled}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.coursesCompleted}</p>
                </div>
                <Award className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Learning Hours</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.totalHours}</p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certificates</p>
                  <p className="text-2xl font-bold text-gray-900">{userStats.certificates}</p>
                </div>
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Current Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.slice(0, 3).map((course) => (
                    <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-16 h-10 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm text-gray-600">{course.progress}%</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{course.lastAccessed}</p>
                        <Button size="sm" className="mt-2">
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements
                    .filter((a) => a.earned)
                    .slice(0, 4)
                    .map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <Award className="h-8 w-8 text-green-600" />
                        <div>
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            {/* In Progress */}
            <Card>
              <CardHeader>
                <CardTitle>In Progress ({enrolledCourses.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-20 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm text-gray-600">
                            {course.completedLessons}/{course.totalLessons} lessons
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Last accessed: {course.lastAccessed}</p>
                      </div>
                      <Button>Continue</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Completed */}
            <Card>
              <CardHeader>
                <CardTitle>Completed ({completedCourses.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                        <p className="text-sm text-gray-500">Completed on {course.completedDate}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {course.certificate && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Certified
                          </Badge>
                        )}
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < course.rating ? "text-yellow-400" : "text-gray-300"}>
                              ⭐
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>Download and share your achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <div className="flex items-start justify-between mb-4">
                        <Award className="h-8 w-8 text-blue-600" />
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">Course: {cert.course}</p>
                      <p className="text-sm text-gray-600">Issued: {cert.issueDate}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Track your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-lg border ${
                        achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <Award className={`h-8 w-8 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                      <div>
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                      {achievement.earned && <Badge className="ml-auto bg-green-600">Earned</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
