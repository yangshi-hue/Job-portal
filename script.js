// Sample job data with diverse opportunities
        let jobs = [
            {
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                location: "Ilam, Nepal",
                category: "Technology",
                type: "Full-time",
                salary: "$80,000 - $120,000",
                description: "We're looking for a senior frontend developer to join our dynamic team...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Construction Worker",
                company: "BuildRight Construction",
                location: "Faridpur, Bangladesh",
                category: "Construction",
                type: "Full-time",
                salary: "$45,000 - $65,000",
                description: "Seeking experienced construction workers for residential and commercial projects...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Head Chef",
                company: "Golden Spoon Restaurant",
                location: "Damak,Nepal",
                category: "Restaurant",
                type: "Full-time",
                salary: "$50,000 - $70,000",
                description: "Lead our kitchen team and create exceptional dining experiences...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Waiter/Waitress",
                company: "Café Delight",
                location: "Sylhet",
                category: "Restaurant",
                type: "Part-time",
                salary: "$25,000 - $35,000 + Tips",
                description: "Provide excellent customer service in our busy café environment...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Electrician",
                company: "PowerTech Solutions",
                location: "Dhaka",
                category: "Construction",
                type: "Full-time",
                salary: "$55,000 - $75,000",
                description: "Install and maintain electrical systems in residential and commercial buildings...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Factory Worker",
                company: "Global Manufacturing",
                location: "Remote",
                category: "Manufacturing",
                type: "Full-time",
                salary: "$35,000 - $45,000",
                description: "Operate machinery and ensure quality production in our manufacturing facility...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Delivery Driver",
                company: "QuickDelivery Co.",
                location: "Multiple Cities",
                category: "Transportation",
                type: "Full-time",
                salary: "$30,000 - $40,000 + Benefits",
                description: "Deliver packages safely and efficiently to customers across the city...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Store Manager",
                company: "SuperMart",
                location: "Pokhara",
                category: "Retail",
                type: "Full-time",
                salary: "$45,000 - $60,000",
                description: "Manage daily store operations and lead a team of retail associates...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Security Guard",
                company: "SafeGuard Services",
                location: "Jhapa",
                category: "Security",
                type: "Full-time",
                salary: "$32,000 - $42,000",
                description: "Provide security services for commercial and residential properties...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Cleaner",
                company: "Sparkle Clean",
                location: "Kathmandu",
                category: "Cleaning",
                type: "Part-time",
                salary: "$25,000 - $30,000",
                description: "Maintain cleanliness in office buildings and commercial spaces...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Farm Worker",
                company: "Green Fields Farm",
                location: "Rural Areas",
                category: "Agriculture",
                type: "Seasonal",
                salary: "$28,000 - $35,000",
                description: "Help with planting, harvesting, and general farm maintenance tasks...",
                posted: new Date().toLocaleDateString()
            },
            {
                title: "Nurse",
                company: "City General Hospital",
                location: "Boston",
                category: "Healthcare",
                type: "Full-time",
                salary: "$65,000 - $85,000",
                description: "Provide compassionate patient care in our medical facility...",
                posted: new Date().toLocaleDateString()
            }
        ];

        // Translation data
        const translations = {
            en: {
                "site-name": "Dream Job",
                "nav-home": "Home",
                "nav-jobs": "Find Jobs",
                "nav-post": "Post Job",
                "nav-about": "About",
                "hero-title": "Find Your Dream Job",
                "hero-subtitle": "Connect with top employers and discover opportunities that match your skills and passion",
                "btn-browse": "Browse Jobs",
                "btn-post": "Post a Job",
                "stat-jobs": "Active Jobs",
                "stat-companies": "Companies",
                "stat-seekers": "Job Seekers",
                "stat-success": "Success Rate",
                "filter-all-categories": "All Categories",
                "cat-technology": "Technology",
                "cat-construction": "Construction",
                "cat-restaurant": "Restaurant & Food Service",
                "cat-healthcare": "Healthcare",
                "cat-education": "Education",
                "cat-manufacturing": "Manufacturing",
                "cat-transportation": "Transportation",
                "cat-retail": "Retail",
                "cat-security": "Security",
                "cat-cleaning": "Cleaning Services",
                "cat-agriculture": "Agriculture",
                "cat-marketing": "Marketing",
                "cat-design": "Design",
                "cat-sales": "Sales",
                "cat-finance": "Finance",
                "select-category": "Select Category"
            },
            ne: {
                "site-name": "सपनाको जागिर",
                "nav-home": "घर",
                "nav-jobs": "जागिर खोज्नुहोस्",
                "nav-post": "जागिर पोस्ट गर्नुहोस्",
                "nav-about": "बारेमा",
                "hero-title": "आफ्नो सपनाको जागिर फेला पार्नुहोस्",
                "hero-subtitle": "शीर्ष नियोक्ताहरूसँग जडान गर्नुहोस् र तपाईंको सीप र जुनूनसँग मेल खाने अवसरहरू पत्ता लगाउनुहोस्",
                "btn-browse": "जागिरहरू ब्राउज गर्नुहोस्",
                "btn-post": "जागिर पोस्ट गर्नुहोस्",
                "stat-jobs": "सक्रिय जागिरहरू",
                "stat-companies": "कम्पनीहरू",
                "stat-seekers": "जागिर खोज्नेहरू",
                "stat-success": "सफलता दर",
                "filter-all-categories": "सबै श्रेणीहरू",
                "cat-technology": "प्रविधि",
                "cat-construction": "निर्माण",
                "cat-restaurant": "रेस्टुरेन्ट र खाना सेवा",
                "cat-healthcare": "स्वास्थ्य सेवा",
                "cat-education": "शिक्षा",
                "cat-manufacturing": "उत्पादन",
                "cat-transportation": "यातायात",
                "cat-retail": "खुद्रा",
                "cat-security": "सुरक्षा",
                "cat-cleaning": "सफाई सेवाहरू",
                "cat-agriculture": "कृषि",
                "cat-marketing": "मार्केटिङ",
                "cat-design": "डिजाइन",
                "cat-sales": "बिक्री",
                "cat-finance": "वित्त",
                "select-category": "श्रेणी चयन गर्नुहोस्"
            },
            bn: {
                "site-name": "স্বপ্নের চাকরি",
                "nav-home": "হোম",
                "nav-jobs": "চাকরি খুঁজুন",
                "nav-post": "চাকরি পোস্ট করুন",
                "nav-about": "সম্পর্কে",
                "hero-title": "আপনার স্বপ্নের চাকরি খুঁজুন",
                "hero-subtitle": "শীর্ষ নিয়োগকর্তাদের সাথে যোগাযোগ করুন এবং আপনার দক্ষতা ও আবেগের সাথে মানানসই সুযোগগুলি আবিষ্কার করুন",
                "btn-browse": "চাকরি ব্রাউজ করুন",
                "btn-post": "একটি চাকরি পোস্ট করুন",
                "stat-jobs": "সক্রিয় চাকরি",
                "stat-companies": "কোম্পানি",
                "stat-seekers": "চাকরি প্রার্থী",
                "stat-success": "সফলতার হার",
                "filter-all-categories": "সব বিভাগ",
                "cat-technology": "প্রযুক্তি",
                "cat-construction": "নির্মাণ",
                "cat-restaurant": "রেস্টুরেন্ট ও খাদ্য সেবা",
                "cat-healthcare": "স্বাস্থ্যসেবা",
                "cat-education": "শিক্ষা",
                "cat-manufacturing": "উৎপাদন",
                "cat-transportation": "পরিবহন",
                "cat-retail": "খুচরা",
                "cat-security": "নিরাপত্তা",
                "cat-cleaning": "পরিচ্ছন্নতা সেবা",
                "cat-agriculture": "কৃষি",
                "cat-marketing": "বিপণন",
                "cat-design": "ডিজাইন",
                "cat-sales": "বিক্রয়",
                "cat-finance": "অর্থ",
                "select-category": "বিভাগ নির্বাচন করুন"
            }
        };

        let currentLanguage = 'en';

        // Navigation
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // If showing jobs section, render jobs
            if (sectionId === 'jobs') {
                renderJobs(jobs);
            }
            
            // Update job count on home page
            if (sectionId === 'home') {
                document.getElementById('total-jobs').textContent = jobs.length;
            }
        }

        // Render jobs
        function renderJobs(jobsToRender) {
            const container = document.getElementById('jobs-container');
            
            if (jobsToRender.length === 0) {
                container.innerHTML = '<p>No jobs found matching your criteria.</p>';
                return;
            }
            
            container.innerHTML = jobsToRender.map(job => `
                <div class="job-card fade-in">
                    <h3>${job.title}</h3>
                    <div class="company">${job.company}</div>
                    <div class="job-meta">
                        <span class="job-tag">${job.location}</span>
                        <span class="job-tag">${job.type}</span>
                        <span class="job-tag">${job.category}</span>
                    </div>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                    <p>${job.description.substring(0, 100)}...</p>
                    <p><small>Posted: ${job.posted}</small></p>
                    <button class="btn" onclick="applyForJob('${job.title}', '${job.company}')">Apply Now</button>
                </div>
            `).join('');
        }

        // Filter jobs
        function filterJobs() {
            const searchTerm = document.getElementById('job-search').value.toLowerCase();
            const locationFilter = document.getElementById('location-filter').value;
            const categoryFilter = document.getElementById('category-filter').value;
            
            const filteredJobs = jobs.filter(job => {
                const matchesSearch = !searchTerm || 
                    job.title.toLowerCase().includes(searchTerm) ||
                    job.company.toLowerCase().includes(searchTerm) ||
                    job.description.toLowerCase().includes(searchTerm);
                
                const matchesLocation = !locationFilter || job.location === locationFilter;
                const matchesCategory = !categoryFilter || job.category === categoryFilter;
                
                return matchesSearch && matchesLocation && matchesCategory;
            });
            
            renderJobs(filteredJobs);
        }

        // Apply for job (simulation)
        function applyForJob(jobTitle, company) {
            alert(`Application submitted for ${jobTitle} at ${company}!\n\nIn a real application, this would redirect to an application form or external application system.`);
        }

        // Handle job posting form
        document.getElementById('job-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newJob = {
                title: document.getElementById('job-title').value,
                company: document.getElementById('company-name').value,
                location: document.getElementById('job-location').value,
                category: document.getElementById('job-category').value,
                type: document.getElementById('job-type').value,
                salary: document.getElementById('salary-range').value || 'Salary not specified',
                description: document.getElementById('job-description').value,
                posted: new Date().toLocaleDateString()
            };
            
            // Add job to array
            jobs.unshift(newJob);
            
            // Show success message
            const message = document.getElementById('post-message');
            message.textContent = 'Job posted successfully!';
            message.className = 'message success show';
            
            // Reset form
            this.reset();
            
            // Hide message after 3 seconds
            setTimeout(() => {
                message.classList.remove('show');
            }, 3000);
            
            // Update job count
            document.getElementById('total-jobs').textContent = jobs.length;
        });

        // Language switching function
        function changeLanguage(language) {
            currentLanguage = language;
            const elements = document.querySelectorAll('[data-translate]');
            
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[language] && translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        }

        // Search on Enter key
        document.getElementById('job-search').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterJobs();
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            // Update initial job count
            document.getElementById('total-jobs').textContent = jobs.length;
            
            // Add some animation delays
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
                el.style.animationDelay = `${index * 0.1}s`;
            });
        });