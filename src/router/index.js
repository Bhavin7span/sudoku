import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/instructions',
      name: 'Instructions',
      component: () => import('../views/InstructionsView.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: () => import('../views/PrivacyPolicyView.vue'),
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: () => import('../views/DisclaimerView.vue'),
    },
    {
      path: '/terms',
      name: 'Terms',
      component: () => import('../views/TermsAndConditionsView.vue'),
    },
    {
      path: '/contact-us',
      name: 'Contact',
      component: () => import('../views/ContactUsView.vue'),
    },
    {
      path: '/blog/',
      name: 'Blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/5-Outstanding-Reasons-to-Dive-into-Sudoku-Regularly',
      name: 'blog-5-outstanding-reasons',
      component: () => import('../views/Blog/5Reasons.vue'),
    },
    {
      path: '/blog/Can-Brain-Training-Combat-Cognitive-Decline',
      name: 'blog-can-brain',
      component: () => import('../views/Blog/CanBrain.vue'),
    },
    {
      path: '/blog/Combined-Mental-Relaxation:-How-Sudoku-and-CBD-can-improve-your-well-being',
      name: 'blog-combined-mental',
      component: () => import('../views/Blog/CombinedMental.vue'),
    },
    {
      path: '/blog/Could-Crosswords-and-Sudoku-Optimize-Our-Cognitive-Health?',
      name: 'blog-could-crosswords',
      component: () => import('../views/Blog/CouldCrosswords.vue'),
    },
    {
      path: '/blog/History-of-Sudoku',
      name: 'blog-history-sudoku',
      component: () => import('../views/Blog/HistorySudoku.vue'),
    },
    {
      path: '/blog/How-To-Solve-a-Very-Difficult-Sudoku',
      name: 'blog-how-solve',
      component: () => import('../views/Blog/HowSolve.vue'),
    },
    {
      path: '/blog/Is-there-Math-Behind-Sudoku-Puzzles',
      name: 'blog-math-behind',
      component: () => import('../views/Blog/MathBehind.vue'),
    },
    {
      path: '/blog/Sudoku-Strategies',
      name: 'blog-sudoku-strategies',
      component: () => import('../views/Blog/SudokuStrategy.vue'),
    },
    {
      path: '/blog/Sudoku-Exercises-Will-Not-Make-You-Smarter',
      name: 'blog-sudoku-exercises',
      component: () => import('../views/Blog/SudokuExercises.vue'),
    },
    {
      path: '/blog/Sudoku-for-Children---7-Sudoku-Models-for-Children',
      name: 'blog-sudoku-children',
      component: () => import('../views/Blog/SudokuChildren.vue'),
    },
    {
      path: '/blog/The-Combination-of-Sudoku',
      name: 'blog-sudoku-combination',
      component: () => import('../views/Blog/SudokuCombination.vue'),
    },
    {
      path: '/blog/The-Evolution-of-Sudoku-A-Confluence-of-Math-Architecture-and-Media',
      name: 'blog-sudoku-one',
      component: () => import('../views/Blog/SudokuOne.vue'),
    },
    {
      path: '/blog/Brain-Boosters-The-Scientifically-Proven-Benefits-of-Sudoku',
      name: 'blog-brain-boosters',
      component: () => import('../views/Blog/BrainBoosters.vue'),
    },
    {
      path: '/blog/Sharpen-Your-Mind-with-Sudoku:-More-Than-Just-a-Puzzle',
      name: 'blog-sharpen-mind',
      component: () => import('../views/Blog/SharpenMind.vue'),
    },
    {
      path: '/blog/Mastering-Sudoku-From-Basics-to-Advanced-Techniques',
      name: 'blog-master-sudoku',
      component: () => import('../views/Blog/MasterSudoku.vue'),
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('../views/LoginView.vue'),
    // },
    // {
    //   path: '/signup',
    //   name: 'Signup',
    //   component: () => import('../views/SignupView.vue'),
    // },
  ],
});

export default router;
