import { Avatar, AvatarFallback, AvatarImage, AvatarGroup, AvatarBadge } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Sizes */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">Sizes</p>
        <div className="flex items-end gap-4">
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* With Images */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">With Images</p>
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Active Status */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">Active Status</p>
        <div className="flex items-center gap-6">
          <Avatar active size="default">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <Avatar active size="default">
            <AvatarFallback>ON</AvatarFallback>
          </Avatar>
          <Avatar active size="lg">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Fallback Initials */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">Fallback Initials</p>
        <div className="flex items-center gap-4">
          <Avatar size="default">
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
          <Avatar active size="default">
            <AvatarFallback>RL</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
          <Avatar size="default">
            <AvatarFallback>BB</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Collective Group */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">Collective Group</p>
        <AvatarGroup max={4} size="default">
          <Avatar>
            <AvatarFallback>KM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>RL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>VL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>LE</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>

      {/* ID Badges */}
      <div>
        <p className="text-xs font-heading uppercase tracking-wider mb-3 text-foreground/70">ID Badges</p>
        <div className="flex flex-col gap-4 max-w-md">
          {/* Image + Active Status */}
          <AvatarBadge
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
            name="Viktor Beansworth"
            designation="Head Roaster"
            active
          />

          {/* Image + Inactive */}
          <AvatarBadge
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            name="Elena Groundski"
            designation="Brew Captain"
          />

          {/* Initials + Active */}
          <AvatarBadge
            fallback="KM"
            name="Karl Macchiato"
            designation="Bean Commissar"
            active
          />
        </div>
      </div>
    </div>
  )
}
