
'use client';

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { courseModules } from "@/lib/constants";
import { ArrowRight, ListFilter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const categories = ["Beginner", "Intermediate", "Advanced"];

export default function CoursePage({ params }: { params: { lang: string } }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredCourses = useMemo(() => {
    return courseModules.filter(module => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(module.category);
      const priceMatch = module.price >= priceRange[0] && module.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });
  }, [selectedCategories, priceRange]);
  
  const maxPrice = Math.max(...courseModules.map(m => m.price), 5000);

  return (
    <div className="container mx-auto py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline text-primary">Our Courses</h1>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-foreground/80">
          Choose from a range of programs designed to launch and advance your career in English.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <Card className="p-4 sticky top-20">
            <h3 className="text-xl font-bold mb-4 flex items-center"><ListFilter className="mr-2 h-5 w-5" /> Filters</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => handleCategoryChange(category)}
                    />
                    <Label htmlFor={category} className="font-normal">{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h4 className="font-semibold mb-3">Price Range</h4>
              <Slider
                min={0}
                max={maxPrice}
                step={100}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>LKR {priceRange[0]}</span>
                <span>LKR {priceRange[1]}</span>
              </div>
            </div>
          </Card>
        </aside>

        {/* Course Grid */}
        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((module) => (
              <Link href={`/${params.lang}/course/${module.slug}`} key={module.id} className="group">
                <Card className="flex flex-col h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={module.hint}
                    />
                  </div>
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold font-headline mb-2 flex-grow">{module.title}</h3>
                    <div className="flex justify-between items-center mt-auto">
                      <p className="text-xl font-bold text-primary">LKR {module.price.toLocaleString()}</p>
                      <div className="text-primary group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
             {filteredCourses.length === 0 && (
                <div className="md:col-span-2 xl:col-span-3 text-center py-16">
                    <p className="text-muted-foreground text-lg">No courses match your filters.</p>
                </div>
             )}
          </div>
        </main>
      </div>
    </div>
  );
}
