"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Star, Clock, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "@/components/navigation"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Complete React Developer Course",
      instructor: "Sarah Johnson",
      category: "Web Development",
      level: "Intermediate",
      rating: 4.8,
      students: 12450,
      duration: "40 hours",
      lessons: 156,
      price: "$89.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Master React from basics to advanced concepts with hands-on projects.",
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      instructor: "Mike Chen",
      category: "Programming",
      level: "Advanced",
      rating: 4.9,
      students: 8920,
      duration: "35 hours",
      lessons: 128,
      price: "$79.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Deep dive into advanced JavaScript concepts and modern ES6+ features.",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emma Davis",
      category: "Design",
      level: "Beginner",
      rating: 4.7,
      students: 15600,
      duration: "25 hours",
      lessons: 89,
      price: "$69.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Learn the principles of user interface and user experience design.",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "Dr. Lisa Wang",
      category: "Data Science",
      level: "Intermediate",
      rating: 4.8,
      students: 9340,
      duration: "45 hours",
      lessons: 167,
      price: "$99.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Comprehensive Python course focused on data analysis and machine learning.",
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      instructor: "James Rodriguez",
      category: "Mobile Development",
      level: "Intermediate",
      rating: 4.6,
      students: 7890,
      duration: "50 hours",
      lessons: 189,
      price: "$109.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Build cross-platform mobile apps using Flutter and Dart.",
    },
    {
      id: 6,
      title: "Digital Marketing Mastery",
      instructor: "Anna Thompson",
      category: "Marketing",
      level: "Beginner",
      rating: 4.5,
      students: 11200,
      duration: "30 hours",
      lessons: 112,
      price: "$59.99",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Complete guide to digital marketing strategies and tools.",
    },
  ]

  const categories = [
    "all",
    "Web Development",
    "Programming",
    "Design",
    "Data Science",
    "Mobile Development",
    "Marketing",
  ]
  const levels = ["all", "Beginner", "Intermediate", "Advanced"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Courses</h1>
          <p className="text-gray-600">Discover and learn new skills with our comprehensive course library.</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600">{course.level}</Badge>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{course.lessons} lessons</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                  <Link href={`/courses/${course.id}`}>
                    <Button>View Course</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSelectedLevel("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
