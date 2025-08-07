from manim import *
config.background_color = "#FFFFFF"

class GameOfLifeFirst(Scene):
	def construct(self):
		# Initial configuration for the Game of Life
		initial_grid = [
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 0, 0, 0, 0],
			[0, 0, 0, 0, 1, 0, 0, 0],
			[0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
		]

		# Create a grid of squares
		grid_size = len(initial_grid)
		squares = VGroup()
		for i in range(grid_size):
			for j in range(grid_size):
				square = Square(side_length=0.5)
				square.move_to(np.array([i - grid_size / 2, j - grid_size / 2,
0]))
				if initial_grid[i][j] == 1:
					square.set_fill(WHITE, opacity=1)
				else:
					square.set_fill(BLACK, opacity=1)
				squares.add(square)

		# self.play(Create(squares))
		self.add(squares)
		self.wait(1)

		# Function to compute the next generation
		def next_generation(grid):
			new_grid = [[0] * grid_size for _ in range(grid_size)]
			for i in range(grid_size):
				for j in range(grid_size):
					live_neighbors = sum(
						grid[i + di][j + dj]
						for di in [-1, 0, 1]
						for dj in [-1, 0, 1]
						if (di != 0 or dj != 0) and 0 <= i + di < grid_size and
0 <= j + dj < grid_size
					)
					if grid[i][j] == 1:
						if live_neighbors in [2, 3]:
							new_grid[i][j] = 1
					else:
						if live_neighbors == 3:
							new_grid[i][j] = 1
			return new_grid

		# Animate five generations
		current_grid = initial_grid
		for _ in range(5):
			current_grid = next_generation(current_grid)
			for i in range(grid_size):
				for j in range(grid_size):
					square = squares[i * grid_size + j]
					if current_grid[i][j] == 1:
						square.set_fill(WHITE, opacity=1)
					else:
						square.set_fill(BLACK, opacity=1)
			self.play(UpdateFromAlphaFunc(squares, lambda m, a:
m.set_opacity(a)))
			self.wait(1)
			
			
		
class GameOfLife(Scene):
				def construct(self):
					# Initial configuration for the Game of Life
					initial_grid = [
						[0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 1, 0, 0, 0, 0],
						[0, 0, 0, 1, 0, 0, 0, 0],
						[0, 0, 0, 1, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0],
						[0, 0, 0, 0, 0, 0, 0, 0],
					]
			
					# Create a grid of squares
					grid_size = len(initial_grid)
					square_size = 0.5
					squares = VGroup()
					for i in range(grid_size):
						for j in range(grid_size):
							square = Square(side_length=square_size)
							# Adjust the position so squares share sides
							square.move_to(np.array([(i - grid_size / 2) * square_size, (j -
			grid_size / 2) * square_size, 0]))
							if initial_grid[i][j] == 1:
								square.set_fill(WHITE, opacity=1)
							else:
								square.set_fill(BLACK, opacity=1)
							squares.add(square)
			
					self.play(Create(squares))
					self.wait(1)
			
					# Function to compute the next generation
					def next_generation(grid):
						new_grid = [[0] * grid_size for _ in range(grid_size)]
						for i in range(grid_size):
							for j in range(grid_size):
								live_neighbors = sum(
									grid[i + di][j + dj]
									for di in [-1, 0, 1]
									for dj in [-1, 0, 1]
									if (di != 0 or dj != 0) and 0 <= i + di < grid_size and
			0 <= j + dj < grid_size
								)
								if grid[i][j] == 1:
									if live_neighbors in [2, 3]:
										new_grid[i][j] = 1
								else:
									if live_neighbors == 3:
										new_grid[i][j] = 1
						return new_grid
			
					# Animate five generations
					current_grid = initial_grid
					for _ in range(5):
						current_grid = next_generation(current_grid)
						for i in range(grid_size):
							for j in range(grid_size):
								square = squares[i * grid_size + j]
								if current_grid[i][j] == 1:
									square.set_fill(WHITE, opacity=1)
								else:
									square.set_fill(BLACK, opacity=1)
						self.play(UpdateFromAlphaFunc(squares, lambda m, a:
			m.set_opacity(a)))
						self.wait(1)
						
						
class GameOfLifeSmooth(Scene):
							def construct(self):
								# Initial configuration for the Game of Life
								initial_grid = [
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 1, 1, 1, 0, 0, 0],
									[0, 0, 1, 0, 0, 0, 0, 0],
									[0, 0, 0, 1, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
									[0, 0, 0, 0, 0, 0, 0, 0],
								]
						
								# Create a grid of squares
								grid_size = len(initial_grid)
								square_size = 0.5
								squares = VGroup()
								for i in range(grid_size):
									for j in range(grid_size):
										square = Square(side_length=square_size)
										# Adjust the position so squares share sides
										square.move_to(np.array([(i - grid_size / 2) * square_size, (j -
						grid_size / 2) * square_size, 0]))
										if initial_grid[i][j] == 1:
											square.set_fill(WHITE, opacity=1)
										else:
											square.set_fill(BLACK, opacity=1)
										squares.add(square)
						
								self.play(Create(squares))
								self.wait(1)
						
								# Function to compute the next generation
								def next_generation(grid):
									new_grid = [[0] * grid_size for _ in range(grid_size)]
									for i in range(grid_size):
										for j in range(grid_size):
											live_neighbors = sum(
												grid[i + di][j + dj]
												for di in [-1, 0, 1]
												for dj in [-1, 0, 1]
												if (di != 0 or dj != 0) and 0 <= i + di < grid_size and
						0 <= j + dj < grid_size
											)
											if grid[i][j] == 1:
												if live_neighbors in [2, 3]:
													new_grid[i][j] = 1
											else:
												if live_neighbors == 3:
													new_grid[i][j] = 1
									return new_grid
						
								# Animate five generations with smooth transitions
								current_grid = initial_grid
								for _ in range(5):
									next_grid = next_generation(current_grid)
									animations = []
									for i in range(grid_size):
										for j in range(grid_size):
											square = squares[i * grid_size + j]
											if next_grid[i][j] != current_grid[i][j]:
												if next_grid[i][j] == 1:
													animations.append(square.animate.set_fill(WHITE,
						opacity=1))
												else:
													animations.append(square.animate.set_fill(BLACK,
						opacity=1))
									self.play(*animations, run_time=0.5)
									self.wait(0.5)
									current_grid = next_grid

class GameOfLifeColor(Scene):
										def construct(self):
											# Initial configuration for the Game of Life
											initial_grid = [
												[0, 0, 0, 0, 0 ,0],
												[0, 0, 0, 0, 0 ,0],
												[0, 0, 0, 0, 0 ,0],
												[0, 0, 0, 0, 0 ,0],
												[0, 0, 0, 0, 0 ,0],
												[0, 0, 0, 0, 0 ,0]
											]
									
											# Create a grid of squares
											grid_size = len(initial_grid)
											square_size = 0.5
											squares = VGroup()
											for i in range(grid_size):
												for j in range(grid_size):
													square = Square(side_length=square_size)
													# Adjust the position so squares share sides
													square.move_to(np.array([(i - grid_size / 2) * square_size, (j -
									grid_size / 2) * square_size, 0]))
													square.set_stroke(BLACK, width=1)
													if initial_grid[i][j] == 1:
														square.set_fill(BLUE, opacity=1)
													else:
														square.set_fill(WHITE, opacity=1)
													squares.add(square)
									
											self.add(squares)
									# 		self.wait(1)
									# 
									# 		# Function to compute the next generation
									# 		def next_generation(grid):
									# 			new_grid = [[0] * grid_size for _ in range(grid_size)]
									# 			for i in range(grid_size):
									# 				for j in range(grid_size):
									# 					live_neighbors = sum(
									# 						grid[i + di][j + dj]
									# 						for di in [-1, 0, 1]
									# 						for dj in [-1, 0, 1]
									# 						if (di != 0 or dj != 0) and 0 <= i + di < grid_size and
									# 0 <= j + dj < grid_size
									# 					)
									# 					if grid[i][j] == 1:
									# 						if live_neighbors in [2, 3]:
									# 							new_grid[i][j] = 1
									# 					else:
									# 						if live_neighbors == 3:
									# 							new_grid[i][j] = 1
									# 			return new_grid
									# 
									# 		# Animate five generations with smooth transitions
									# 		current_grid = initial_grid
									# 		for _ in range(6):
									# 			next_grid = next_generation(current_grid)
									# 			animations = []
									# 			for i in range(grid_size):
									# 				for j in range(grid_size):
									# 					square = squares[i * grid_size + j]
									# 					if next_grid[i][j] != current_grid[i][j]:
									# 						if next_grid[i][j] == 1:
									# 							animations.append(square.animate.set_fill(BLUE,
									# opacity=1))
									# 						else:
									# 							animations.append(square.animate.set_fill(WHITE,
									# opacity=1))
									# 			self.play(*animations, run_time=0.5)
									# 			self.wait(0.5)
									# 			current_grid = next_grid