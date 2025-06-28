import Link from "next/link"
import { BookOpen, Clock, Users, TrendingUp, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Navigation from "@/components/navigation"

export default function Dashboard() {
  const recentCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Sarah Johnson",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      progress: 45,
      totalLessons: 15,
      completedLessons: 7,
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Mike Chen",
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 20,
      totalLessons: 10,
      completedLessons: 2,
      thumbnail: "/placeholder.svg?height=200&width=300",
      instructor: "Emma Davis",
    },
  ]

  const stats = [
    { label: "Courses Enrolled", value: "12", icon: BookOpen },
    { label: "Hours Learned", value: "48", icon: Clock },
    { label: "Certificates", value: "3", icon: TrendingUp },
    { label: "Study Streak", value: "7 days", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Continue Learning Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
            <Link href="/courses">
              <Button variant="outline">View All Courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>
                        {course.completedLessons}/{course.totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-gray-600">{course.progress}% complete</p>
                  </div>

                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full mt-4">Continue Learning</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python for Data Science",
                instructor: "Dr. Lisa Wang",
                rating: 4.8,
                students: 2340,
                price: "$89",
                thumbnail: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Mobile App Development",
                instructor: "James Rodriguez",
                rating: 4.9,
                students: 1890,
                price: "$129",
                thumbnail: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Digital Marketing Mastery",
                instructor: "Anna Thompson",
                rating: 4.7,
                students: 3200,
                price: "$79",
                thumbnail: "/placeholder.svg?height=200&width=300",
              },
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{course.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({course.students} students)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Button>Enroll Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
