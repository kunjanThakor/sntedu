import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobComponent } from "../job/job.component";

@Component({
  selector: 'app-homeconten',
  standalone: true,
  imports: [CommonModule, JobComponent],
  templateUrl: './homeconten.component.html',
  styleUrl: './homeconten.component.css'
})
export class HomecontenComponent {
  recentTrainings = [
    { title: 'Leadership Skills', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Advanced Java', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
  ];

  trainings = [
    { title: 'Data Science Basics', description: 'Learn the basics of data science including Python, data visualization, and more.', image: 'https://images.unsplash.com/photo-1581093458792-4a17b8fbf3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Project Management', description: 'Master project planning, resource management, and Agile methodologies.', image: 'https://images.unsplash.com/photo-1590608897129-79bb2073e6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Cloud Computing', description: 'Understand cloud platforms like AWS, Azure, and Google Cloud.', image: 'https://images.unsplash.com/photo-1518773553398-650c184e5154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Cybersecurity Essentials', description: 'Learn about cybersecurity threats and protection mechanisms.', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Digital Marketing', description: 'Explore the world of SEO, content marketing, and social media strategies.', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Machine Learning', description: 'Dive into machine learning algorithms and practical implementations.', image: 'https://images.unsplash.com/photo-1564866657311-e9cc905d29f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Web Development', description: 'Build modern and responsive web applications.', image: 'https://images.unsplash.com/photo-1584697964191-685d7e7d76a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Python Programming', description: 'Learn Python from scratch with hands-on examples.', image: 'https://images.unsplash.com/photo-1559028012-e198f8f84551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Business Analytics', description: 'Analyze business data and make informed decisions.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    { title: 'Blockchain Basics', description: 'Understand the basics of blockchain technology and its applications.', image: 'https://images.unsplash.com/photo-1517451330947-fc8c1ae96557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
  ];
}
