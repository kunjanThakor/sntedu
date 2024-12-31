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
    { title: 'Advanced Java', image: '../../../assets/java.jpg' },
    { title: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
  ];

  trainings = [
    { title: 'Data Science Basics', description: 'Learn the basics of data science including Python, data visualization, and more.', image: '../../../assets/datascience.avif' },
    { title: 'Project Management', description: 'Master project planning, resource management, and Agile methodologies.', image: '../../../assets/projectmanagement.avif' },
    { title: 'Cloud Computing', description: 'Understand cloud platforms like AWS, Azure, and Google Cloud.', image: '../../../assets/cc.avif' },
    { title: 'Cybersecurity Essentials', description: 'Learn about cybersecurity threats and protection mechanisms.', image: '../../../assets/cybersecurity.jpg' },
    { title: 'Digital Marketing', description: 'Explore the world of SEO, content marketing, and social media strategies.', image: '../../../assets/dm.avif' },
    { title: 'Machine Learning', description: 'Dive into machine learning algorithms and practical implementations.', image: '../../../assets/ml.avif' },
    { title: 'Web Development', description: 'Build modern and responsive web applications.', image: '../../../assets/web.webp' },
    { title: 'Python Programming', description: 'Learn Python from scratch with hands-on examples.', image: '../../../assets/py.avif' },
    { title: 'Business Analytics', description: 'Analyze business data and make informed decisions.', image: '../../../assets/ba.webp' },
    // { title: 'Blockchain Basics', description: 'Understand the basics of blockchain technology and its applications.', image: 'https://images.unsplash.com/photo-1517451330947-fc8c1ae96557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
  ];
}
