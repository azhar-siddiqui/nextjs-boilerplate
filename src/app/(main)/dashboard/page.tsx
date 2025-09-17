import Header from '@/components/common/header';
import { Main } from '@/components/common/main';
import { ProfileDropdown } from '@/components/common/profile-dropdown';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { Search } from '@/components/ui/search';

export default function DashboardPage() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <AnimatedThemeToggler />
        <ProfileDropdown />
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
      </Main>
    </>
  );
}
