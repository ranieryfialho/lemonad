import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProjectCard = ({ project }) => {
  const { theme } = useTheme();

  return (
    <motion.div variants={itemVariants}>
      <MagicCard
        gradientColor={theme === 'dark' ? '#B5FF00' : '#537402'}
        className="h-full overflow-hidden"
      >
        <Card className="bg-transparent border-none text-left h-full group">
          <div className="overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <CardHeader>
            <CardTitle className="font-lemonad text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service, i) => (
                <Badge key={i} variant="outline" className="font-engravers">
                  {service}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </MagicCard>
    </motion.div>
  );
};