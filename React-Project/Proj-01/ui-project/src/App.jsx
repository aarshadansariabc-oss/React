import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const user = [
    {
      img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600",
      intro: "Confident professional with stable lifestyle",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
      intro: "Hardworking individual lacking proper support",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
      intro: "Skilled worker with limited banking access",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600",
      intro: "Financially independent and goal oriented",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600",
      intro: "Talented youth seeking better opportunities",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600",
      intro: "Small business owner with limited resources",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600",
      intro: "Well settled individual enjoying financial security",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600",
      intro: "Aspiring professional facing service gaps",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600",
      intro: "Freelancer managing finances without support",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=600",
      intro: "Experienced professional with stable income",
      tag: "Satisfied",
    },
  ];

  return (
    <div>
      <Section1 user = {user}/>
      <Section2 />
    </div>
  )
}

export default App
