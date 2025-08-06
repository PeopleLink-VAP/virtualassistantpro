import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Calendar, GitCommit } from 'lucide-react';

interface GitHubInfo {
  lastCommit: {
    sha: string;
    message: string;
    author: string;
    date: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export const SystemSettings = () => {
  const [githubInfo, setGithubInfo] = useState<GitHubInfo>({
    lastCommit: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchGitHubInfo();
  }, []);

  const fetchGitHubInfo = async () => {
    try {
      setGithubInfo(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch(
        'https://api.github.com/repos/PeopleLink-VAP/virtualassistantpro/commits?per_page=1'
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
      }
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        const commit = data[0];
        setGithubInfo({
          lastCommit: {
            sha: commit.sha.substring(0, 7),
            message: commit.commit.message,
            author: commit.commit.author.name,
            date: commit.commit.author.date,
          },
          loading: false,
          error: null,
        });
      } else {
        throw new Error('No commits found');
      }
    } catch (error) {
      console.error('Error fetching GitHub info:', error);
      setGithubInfo({
        lastCommit: null,
        loading: false,
        error: 'Unable to fetch repository information',
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Github className="w-5 h-5" />
            Repository Information
          </CardTitle>
          <CardDescription>
            Latest updates from the GitHub repository
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {githubInfo.loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-sm text-muted-foreground">Loading repository information...</div>
            </div>
          ) : githubInfo.error ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-sm text-red-500">{githubInfo.error}</div>
            </div>
          ) : githubInfo.lastCommit ? (
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Latest Commit</span>
                    <Badge variant="outline" className="font-mono text-xs">
                      {githubInfo.lastCommit.sha}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {githubInfo.lastCommit.message}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>By {githubInfo.lastCommit.author}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>
                        {new Date(githubInfo.lastCommit.date).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <a
                  href="https://github.com/PeopleLink-VAP/virtualassistantpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>
            Current system status and information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Environment</p>
              <p className="text-sm text-muted-foreground">Production</p>
            </div>


            <div>
              <p className="text-sm font-medium">Database</p>
              <p className="text-sm text-muted-foreground">Supabase PostgreSQL</p>
            </div>

            <div>
              <p className="text-sm font-medium">Framework</p>
              <p className="text-sm text-muted-foreground">React + Vite</p>
            </div>

            <div>
              <p className="text-sm font-medium">Deployment</p>
              <p className="text-sm text-muted-foreground">Lovable Platform</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Attribution />
    </div>
  );
};

const Attribution = () => (
  <div className="fixed bottom-4 right-4 flex items-center gap-2 text-muted-foreground text-sm opacity-75 hover:opacity-100 transition-opacity">
    <img src="https://alphabits.team/images/AB_Logo_black_icon.png" alt="Alpha Bits Logo" className="h-4 w-4" />
    <a href="https://alphabits.team/?utm_source=vap&utm_medium=1&utm_campaign=launch" target="_blank" rel="noopener noreferrer" className="hover:underline">
      Built with ♥ &amp; AI
    </a>
  </div>
);