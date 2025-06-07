import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FrontmatterData } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
interface ContentCardProps {
  path: string;
  data: FrontmatterData;
}
const ContentCard = ({ data, path }: ContentCardProps) => {
  return (
    <Card className="w-full max-w-sm flex justify-between bg-background">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">{data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-col gap-1">
          {data.image && (
            <Image
              className="border-border border-2 rounded-base"
              src={data.image}
              alt={data.title!}
              width={500}
              height={300}
            />
          )}
          <div className="flex gap-2 flex-wrap">
            {data.tags?.map((tag) => (
              <Badge key={tag} variant="neutral">
                {tag}
              </Badge>
            ))}
          </div>
          <p>{data.description}</p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`${path}`}>View {data.title}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
